def DFS(graph, v, visited):
  visited[v] = True  # 방문표시
  print(v, end='')

  for i in graph[v]:  # 방문여부 확인
    if not visited[i]:
      DFS(graph, i, visited)  # 방문 안했으면 스택에 추가


graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]
visited = [False] * 9
DFS(graph, 1, visited)
