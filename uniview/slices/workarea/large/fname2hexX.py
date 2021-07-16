import os, string, glob, sys

if len(sys.argv) > 1:
    hexOfFirst = sys.argv[1];
else:
    print 'Hex number of first character:'
    hexOfFirst = sys.stdin.readline()[:-1];

filenames = glob.glob('*.png')
for filename in filenames:
	if len(filename) == 41: 
		correctedname = filename[:35]+'0'+filename[35:]
		os.rename( filename, correctedname );


filenames = glob.glob('*.png')
filenames.sort()
decnum = int(hexOfFirst, 16)
col = 0
row=0
for filename in filenames:
	if col==14:
		col =0
		row=row+1
	increment = col*16
	hexnum = hex(decnum+row+increment)[2:].upper();
	if len(hexnum) == 2:
		hexnum = '00' + hexnum;
	if len(hexnum) == 3:
		hexnum = '0' + hexnum;
	#print '>'+hexnum;	
	newname = hexnum + '.png';
	print filename, ' becomes ', newname
	os.rename( filename, newname );
	#decnum = decnum+1;
	col = col+1
	print decnum;
	
