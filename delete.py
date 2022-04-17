import heapq

n = int(input())
gs = []
#최소힙
for _ in range(n):
    dist,f = map(int,input().split())
    heapq.heappush(gs,[dist,f])
#최대힙
target,fuel = map(int,input().split())

filled = []
cnt = 0

while target>fuel:
   
    while gs and gs[0][0]<=fuel:
        dist, f = heapq.heappop(gs)
        heapq.heappush(filled,-1*f)
   
    if not filled:
        cnt = -1
        break
   
    f = heapq.heappop(filled)
    fuel += -1*f
    cnt+=1

print(cnt)
    # 지금 fuel로 갈 수 있는 거리의 gas들을 전부 move라는 최대힙에 넣음
    #while이 들어간 이유, 무엇을 반복하기 위해서?
    #가스가 남아있고 갈수있는거리의 가스만 넣음 넣다가, 이제 못 가는 거리만 나갈 때 멈춤
    #갈수있는거리에서 최댓값 ,갱신하고 다시 거기서 최댓값
    # move 최대힙에서 빼내서 fuel이랑 cnt를 갱신함
