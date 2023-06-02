class Node:

  # constructor · initialize
  def __init__(self, data):
    self.data = data  # self 는 생성되는 객체의 인스턴스를 참조한다.
    self.next_node = None


node_1 = Node("once")
node_2 = Node("upon")
node_3 = Node("a")
node_4 = Node("time")

node_1.next_node = node_2
node_2.next_node = node_3
node_3.next_node = node_4
