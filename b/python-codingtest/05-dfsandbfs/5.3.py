N, M = map(int, input().split())

graph = []
for i in range(N):
  graph.append(list(map(int, input())))
visited = []

def DFS(graph, x, y):

  DFS(graph, x - 1, y)
  DFS(graph, x + 1, y)
  DFS(graph, x, y - 1)
  DFS(graph, x, y + 1)

  DFS(graph, 0, 0)
