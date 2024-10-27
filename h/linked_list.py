class Node:

    def __init__(self, data):  # constructor · initialize
        self.data = data  # self 는 생성되는 객체의 인스턴스를 참조한다.
        self.next_node = None  # next_node method serves as the node's link.


class LinkedList:

    def __init__(self, first_node):
        self.first_node = first_node  # 노드가 시작되는 첫 번째 노드를 추적한다.

    def read(self, index):
        # we begin at the first node of the list
        current_node = self.first_node
        current_index = 0

        while current_index < index:
            # if we're past the end of the list, that means the value cannot
            # be found in the list, so return none.
            if current_node is None:
                return None
            # we keep following the links of each node until we get to the
            # index we're looking for
            current_node = current_node.next_node
            current_index += 1

        return current_node.data




if __name__ == '__main__':
    node_1 = Node("once")
    node_2 = Node("upon")
    node_3 = Node("a")
    node_4 = Node("time")

    node_1.next_node = node_2
    node_2.next_node = node_3
    node_3.next_node = node_4

    linked_list = LinkedList(node_1)
    print(linked_list.read(1))