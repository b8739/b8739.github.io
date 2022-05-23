s = list(map(str,input().split()))
a = []

for i in range(26):
    a.append(chr(i+97))

a.extend(a)

for i in s:
    for j in i:
        if j.isdigit():
            print(j,end='')
        else:
            print(a[ord(j)-98+13],end='')
    print(' ',end='')

# print(chr(ord('a')+13))