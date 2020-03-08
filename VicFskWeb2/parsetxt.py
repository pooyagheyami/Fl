#In the name of God
#import string

class Txtparse:
    def __init__(self):
        self.author = ''
        self.title = ''
        self.contxt = ''
    def opentxt(self,txtfile):
        with open(txtfile,'r',encoding='utf-8') as fil :
            self.lines = fil.readlines()
    #parse text file
    def readtxt(self):
        self.author = self.lines[0].strip('\n')
        jom1 = self.lines[1].split('.')
        sss = ''
        if len(jom1) > 1:
            for j in jom1:
                if len(sss)+len(j) > 95:
                    sss = sss + j[:(95-len(sss))]
                    break
                else:
                    sss = sss + j
            self.title = sss + '...'
        else:
            self.title = jom1[0]
        for i in range(2, len(self.lines)):
            self.contxt = self.contxt + self.lines[i]
        #print(self.author,self.title)