# algorithm

### GREEDY

**현재 상황에서 지금 당장 좋은 것만 고르는 알고리즘**

* 매우 다양한 문제 유형
* 창의력 / 문제를 풀기위한 최소한의 아이디어를 떠올릴 수 있는 능력

> 문제를 만났을 때, 단순히 현재 상황에서 가장 좋아보이는 것만을 선택해도 문제를 풀 수 있는가를 파악해야 한다.

> 그리디 알고리즘은 기준에 따라 좋은 것을 선택하는 알고리즘, 문제에서 '가장 큰 순서대로', '가장 작은 순서대로' 와 같은 기준을 제시해주기도 한다.

> 정렬 알고리즘과 자주 짝을 이루어 출제된다.

```
대부분의 그리디 알고리즘 문제는 문제풀이를 위한 최소한의 아이디어를 떠올리고, 이것이 정당한지 검토할 수 있어야 답을 도출할 수 있다.
코딩테스트에서 문제유형을 파악하기 어렵다면, 그리디 알고리즘을 의심하고, 해결방법이 존재하는지 고민할 것
```

---

### 구현

---

### 스택 / 큐

#### QUEUE (FIFO)
파이썬에서의 큐

```py

from collections import deque

queue = deque()

queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()

# [3, 7, 1, 4]
```

#### STACK (FILO)

컴퓨터 내부에서 재귀함수의 수행은 스택 자료구조를 이용한다.

따라서 스택자료구조를 활용해야 하는 알고리즘은 재귀함수를 이용해서 구현할 수 있다. (DFS가 대표적 예)

---

### DFS 

**깊이 우선 탐색**, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘 으로 스택을 이용한다.

특정한 경로로 탐색하다가 특정한 상황에서 최대한 깊숙이 들어가서 노드를 방문한 후, 다시 돌아가 다른경로로 탐색하는 알고리즘

### BFS

너비 우선 탐색, 두 항목간의 (최단)경로를 찾는데 사용 됩니다.

문제를 그래프로 모형화 하고, BFS를 사용하자.

##### 알고리즘 구현

a. 확인할 데이터를 담을 큐를 준비한다.

b. 큐에서 하나를 꺼낸다.

c. 해당 데이터가 A/B인지 확인한다.

d. 분기한다.

e. 위 과정을 반복한다.


```py
from collections import deque

def search(name):
    # search_queue = []
    search_queue = deque()

    # 탐색을 해야하는 데이터 : ['alice', 'bob', 'claire'] / Hash Map 사용
    search_queue += graph['you']

    # 이미 확인한 데이터 추적
    searched = []
    
    while search_queue:
      person = search_queue.popleft()
      if not person in searched:
        if person_is_seller(person):
          print person + 'is a mango seller!'
          return True
        else: 
          search_queue += graph[person]
          searched.append(person)
    return False

    def person_is_seller(name):
      return name[-1] == 'm'
      
search('you')
```


