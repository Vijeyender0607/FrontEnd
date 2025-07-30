# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




⚡ The **Power Grid Maintenance** problem on LeetCode (Problem 3607) is a graph-based challenge that tests your ability to manage dynamic connectivity and query resolution in a network of power stations.

### 🧩 Problem Summary
You're given:
- `c` power stations labeled from `1` to `c`
- `connections`: bidirectional cables connecting stations
- `queries`: a list of operations, either:
  - `[1, x]`: Request a maintenance check for station `x`
  - `[2, x]`: Take station `x` offline

### 🛠️ Query Behavior
- If station `x` is online, it handles its own check.
- If offline, the check is handled by the **smallest ID online station** in the same connected grid.
- If no online station exists in that grid, return `-1`.

### 🧠 Key Concepts
- **Union-Find** or **DFS/BFS** to identify connected components
- **Sorted sets** to track online stations per component
- Efficient query handling using `O(log n)` operations

### 🧪 Example
```text
Input:
c = 5
connections = [[1,2], [2,3], [3,4], [4,5]]
queries = [[1,3], [2,1], [1,1], [2,2], [1,2]]

Output:
[3,2,3]
```

### 💡 Hints from LeetCode
- Use DFS/BFS to assign component IDs
- Maintain a sorted set of online stations per component
- For `[2, x]`, remove `x` from its component set
- For `[1, x]`, return `x` if online, else smallest online station in its component, or `-1` if none

Would you like a Java implementation or a breakdown of the algorithm next? I think you'd enjoy optimizing this with a modular approach.





package com.tdd.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import java.util.List;

import static org.mockito.Mockito.doReturn;

public class PowerGridMaintanceTest {
    //Given
    @Mock
    PowerGridMaintance powerGridMaintance;
    ListNode connector;

    @org.junit.jupiter.api.BeforeEach
    void setUp() {
        int[][] connections = {
                {1, 2},
                {2, 3},
                {3, 4},
                {4, 5}
        };
        powerGridMaintance = new PowerGridMaintance();
        connector = powerGridMaintance.createConnections(connections);
    }

    @Test
    void createConnectionsTest(){
        Assertions.assertEquals(connector.next.val,2);
        Assertions.assertEquals(connector.next.prev.val,1);
        Assertions.assertEquals(connector.next.next.val,3);
        Assertions.assertEquals(connector.next.next.next.val,4);
    }

    @Test
    void findStationTest(){

        //When
        ListNode result = powerGridMaintance.findStation(connector,1);
        Assertions.assertEquals(result.val,1);
        ListNode failedResult = powerGridMaintance.findStation(connector,12);
        Assertions.assertNotEquals(12, failedResult.val);
    }

    @Test
    void findConnectionBetweenStationsTest(){
        //when
        //if connection found do nothing
        Assertions.assertTrue(powerGridMaintance.findConnectionBetweenStations(connector,1,2));
        Assertions.assertEquals(powerGridMaintance.findStation(connector,1).val,1);
        //if connection not found delete endstation
        Assertions.assertFalse(powerGridMaintance.findConnectionBetweenStations(connector,2,1));
        Assertions.assertNotEquals(powerGridMaintance.findStation(connector,1).val,1);
        // if the start station and end station are same remove and set connector to next small node greater than 0
        Assertions.assertFalse(powerGridMaintance.findConnectionBetweenStations(connector,2,2));
        Assertions.assertNotEquals(powerGridMaintance.findStation(connector,1).val,1);
    }

    @Test
    void processQueriesTest(){
        int[][] query = {
                {1, 3},
                {2, 1},
                {1, 1},
                {2, 2},
                {1, 2},
        };
        int[][] connections = {
                {1, 2},
                {2, 3},
                {3, 4},
                {4, 5}
        };

        var result=powerGridMaintance.processQueries(5,connections,query);
        Assertions.assertEquals(List.of(3,2,3),result);
    }

//    public List<Integer> getConnections(ListNode connector)
//    {
//        List<Integer> result = new java.util.ArrayList<>();
//        ListNode current = connector;
//        while (current != null) {
//            result.add(current.val);
//            current = current.next;
//        }
//        return result;
//    }
}
=======================================================

package com.tdd.demo;

import java.util.List;

public class PowerGridMaintance {

    public ListNode createConnections(int[][] connections)
    {
        if (connections == null || connections.length == 0) return null;
        // Create the head node
        ListNode head = new ListNode(connections[0][0]);
        ListNode prev = head;
        ListNode current = new ListNode(connections[0][1]);
        head.next = current;
        current.prev = head;

        for (int i = 1; i < connections.length; i++) {
            ListNode nextNode = new ListNode(connections[i][1]);
            current.next = nextNode;
            nextNode.prev = current;
            current = nextNode;
        }
        return head;
    }



    public ListNode findStation(ListNode connector, int station){
        ListNode current = connector;
        while (current != null) {
            if (current.val == station) {
                return current;
            }
            current = current.next;
        }
        // If not found, return a dummy node with a value that cannot be a valid station
        return new ListNode(-1);
    }


    public boolean findConnectionBetweenStations(ListNode connector, int startStation, int endStation) {
        if (startStation == endStation) {
            // Remove the station if start and end are the same
            ListNode node = findStation(connector, startStation);
            if (node != null && node.val == startStation) {
                if (node.prev != null) {
                    node.prev.next = node.next;
                }
                if (node.next != null) {
                    node.next.prev = node.prev;
                }
                node.val = -1; // Mark as removed
            }
            return false;
        }
        ListNode start = findStation(connector, startStation);
        if (start == null || start.val != startStation) return false;
        // Check forward
        ListNode current = start;
        while (current != null) {
            if (current.val == endStation) return true;
            current = current.next;
        }
        // If not found, delete the endStation node if it exists
        ListNode end = findStation(connector, endStation);
        if (end != null && end.val == endStation) {
            if (end.prev != null) {
                end.prev.next = end.next;
            }
            if (end.next != null) {
                end.next.prev = end.prev;
            }
            end.val = -1; // Mark as removed
        }
        return false;
    }

    public List<Integer> processQueries(int c, int[][] connections, int[][] queries) {
        List<Integer> results = new java.util.ArrayList<>();
        ListNode connector = createConnections(connections);

        for (int[] query : queries) {
            if (query[0] == 1) {
                // Query type 1: count direct connections from station 1 to query[1]
                ListNode station = findStation(connector, 1);
                if (station != null && station.val == 1 && findConnectionBetweenStations(connector, 1, query[1])) {
                    int count = 0;
                    ListNode current = connector;
                    while (current != null && current.val != -1 && current.val <= query[1]) {
                        count++;
                        current = current.next;
                    }
                    results.add(count);
                } else {
                    results.add(0);
                }
            } else if (query[0] == 2) {
                // Query type 2: get the value at the given index (1-based)
                int idx = query[1] - 1;
                ListNode current = connector;
                int i = 0;
                while (current != null && i < idx) {
                    current = current.next;
                    i++;
                }
                if (current != null && current.val != -1) {
                    results.add(current.val);
                } else {
                    results.add(-1);
                }
            }
        }
        // Only keep results for queries of type 1
        List<Integer> filteredResults = new java.util.ArrayList<>();
        int resultIdx = 0;
        for (int i = 0; i < queries.length; i++) {
            if (queries[i][0] == 1) {
                if (results.get(resultIdx) == 0) {
                    // Find the next small station greater than 0
                    int nextStation = -1;
                    for (int j = 0; j < results.size(); j++) {
                        if (results.get(j) > 0) {
                            nextStation = results.get(j);
                        }
                    }
                    filteredResults.add(nextStation);
                } else {
                    filteredResults.add(results.get(resultIdx));
                }
            }
            resultIdx++;
        }
        return filteredResults;
    }
}
=====================================================

demo app test======

package com.tdd.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.mockito.Mockito.doReturn;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
		Assertions.assertEquals(1,1);
	}

	@Test
	void createListNodeFromArrayListTest(){
		DemoApplication demoApplication= new DemoApplication();
		ListNode l1= new ListNode();
		ListNode l2= new ListNode();
		ListNode l3= new ListNode();
		l1.val=2;
		l1.next=l2;
		l2.val=4;
		l2.next=l3;
		l3.val=3;

		Assertions.assertEquals(l1.val,demoApplication.createListNodeFromArrayList(Arrays.asList(2,4,3)).val);
	}

	@Test
	void addTwoListNodeTest(){
		DemoApplication demoApplication= new DemoApplication();
		ListNode first = demoApplication.createListNodeFromArrayList(Arrays.asList(2,4,3));
		ListNode second = demoApplication.createListNodeFromArrayList(Arrays.asList(5,6,4));
	    ListNode result= demoApplication.addTwoListNode(first, second);
		Assertions.assertEquals(7, result.val);
		Assertions.assertEquals(0,result.next.val);
		Assertions.assertEquals(8, result.next.next.val);
	}

	@Test
	void findMedianSortedArraysTest() {
		DemoApplication demoApplication = new DemoApplication();
		int[] nums1 = {1, 3};
		int[] nums2 = {2};
		double result = demoApplication.findMedianSortedArrays(nums1, nums2);
		Assertions.assertEquals(2.0, result);

		nums1 = new int[]{1, 2};
		nums2 = new int[]{3, 4};
		result = demoApplication.findMedianSortedArrays(nums1, nums2);
		Assertions.assertEquals(2.5, result);
	}

	@Test
	void validateCoupons(){
		DemoApplication demoApplication = new DemoApplication();
		String [] couponCode = {"m","A","B","P","J","P","u","W","4","J","C","9"};
        String [] businessLine= {"electronics","invalid","invalid","pharmacy","invalid","electronics","restaurant","grocery","restaurant","pharmacy","pharmacy","pharmacy"};
		boolean[] isActive ={true,true,false,true,false,true,true,false,false,false,true,false};
		var result=demoApplication.validateCoupons(couponCode,businessLine,isActive);
		Assertions.assertEquals(List.of("P","m","C","P","u"),result);
	}

	@Test
	void ValidateCode(){
		DemoApplication demoApplication = new DemoApplication();
		Assertions.assertTrue(demoApplication.validateCode("SAVE20"));
		Assertions.assertTrue(demoApplication.validateCode("PHARMA5"));
		Assertions.assertFalse(demoApplication.validateCode("SAVE@20"));
		Assertions.assertFalse(demoApplication.validateCode(""));
	}

	@Test
	void validateBussinesLine(){
		DemoApplication demoApplication= new DemoApplication();
		List<String> bussinesLine = Arrays.asList("electronics","grocery","pharmacy","restaurant");
		Assertions.assertTrue(demoApplication.validateBussinesLine("electronics"));
		Assertions.assertTrue(demoApplication.validateBussinesLine("grocery"));
		Assertions.assertTrue(demoApplication.validateBussinesLine("pharmacy"));
		Assertions.assertTrue(demoApplication.validateBussinesLine("restaurant"));
		Assertions.assertFalse(demoApplication.validateBussinesLine("hello"));
		Assertions.assertFalse(demoApplication.validateBussinesLine("hi"));
	}

	@Test
	void sortByBusinessLine(){
		DemoApplication demoApplication= new DemoApplication();
		var result=demoApplication.sortByBusinessLine(Map.of("w5eNg_Z" ,"electronics","u7royPc","electronics"));
		Assertions.assertEquals(Arrays.asList("u7royPc","w5eNg_Z"), result);
	}

}
==================================
package com.tdd.demo;

import com.sun.tools.jconsole.JConsoleContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class DemoApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

	}
	public ListNode createListNodeFromArrayList(List numb){
		ListNode dummy = new ListNode();
		ListNode current = dummy;
		for (Object num : numb) {
			ListNode newNode = new ListNode();
			newNode.val = (int) num;
			current.next = newNode;
			current = newNode;
		}
		return dummy.next;
	}


	public ListNode addTwoListNode(ListNode l1, ListNode l2){
		ListNode dummy = new ListNode();
		ListNode current = dummy;
		int carry = 0;
		while (l1 != null || l2 != null || carry != 0) {
			int sum = carry;
			if (l1 != null) {
				sum += l1.val;
				l1 = l1.next;
			}
			if (l2 != null) {
				sum += l2.val;
				l2 = l2.next;
			}
			current.next = new ListNode();
			current = current.next;
			current.val = sum % 10;
			carry = sum / 10;
		}
		return dummy.next;

	}

	public double findMedianSortedArrays(int[] nums1, int[] nums2) {
		int m = nums1.length, n = nums2.length;
		int[] merged = new int[m + n];
		int i = 0, j = 0, k = 0;
		while (i < m && j < n) {
			if (nums1[i] < nums2[j]) {
				merged[k++] = nums1[i++];
			} else {
				merged[k++] = nums2[j++];
			}
		}
		while (i < m) {
			merged[k++] = nums1[i++];
		}
		while (j < n) {
			merged[k++] = nums2[j++];
		}
		if ((m + n) % 2 == 1) {
			return merged[(m + n) / 2];
		} else {
			return (merged[(m + n) / 2 - 1] + merged[(m + n) / 2]) / 2.0;
		}
	}




	public List<String> validateCoupons(String[] code, String[] businessLine, boolean[] isActive) {
		Map<String, String> validCoupons = new java.util.LinkedHashMap<>();
		for (int i = 0; i < code.length; i++) {
			if (isActive[i] && validateCode(code[i]) && validateBussinesLine(businessLine[i])) {
				validCoupons.put(code[i] + "_" + i, businessLine[i]);
			}
		}
		List<String> sorted = sortByBusinessLine(validCoupons);
		List<String> result = new ArrayList<>();
		for (String couponWithIndex : sorted) {
			int lastUnderscore = couponWithIndex.lastIndexOf("_");
			String coupon = couponWithIndex.substring(0, lastUnderscore);
			result.add(coupon);
		}
		return result;
	}

	public boolean validateCode(String code) {
        return code != null && !code.isEmpty() && code.matches("^[A-Za-z0-9_]+$");
	}
	public boolean validateBussinesLine(String Line) {
		if (Line == null) return false;
		List<String> validLines = List.of("electronics", "grocery", "pharmacy", "restaurant");
		return validLines.contains(Line);
	}



	public List<String> sortByBusinessLine(Map<String, String> result) {
		List<String> businessOrder = List.of("electronics", "grocery", "pharmacy", "restaurant");
		return result.entrySet().stream()
				.sorted((e1, e2) -> {
					int idx1 = businessOrder.indexOf(e1.getValue());
					int idx2 = businessOrder.indexOf(e2.getValue());
					if (idx1 == idx2) {
						return e1.getKey().compareTo(e2.getKey());
					}
					return Integer.compare(idx1, idx2);
				})
				.map(Map.Entry::getKey)
				.toList();
	}

}
=================
package com.tdd.demo;


public class ListNode {
      int val;
      ListNode next;
      ListNode prev;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next, ListNode prev) { this.val = val; this.next = next; this.prev=prev; }
  }
