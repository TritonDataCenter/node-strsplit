all: java.csv perl.csv python.csv js-strsplit.csv

java.csv: testcases.csv | StringSplitTest.class
	java StringSplitTest < $< > $@

StringSplitTest.class: StringSplitTest.java
	javac $^

perl.csv: testcases.csv strsplit.pl
	./strsplit.pl < $< > $@

python.csv: testcases.csv strsplit.py
	./strsplit.py < $< > $@

js-strsplit.csv: testcases.csv strsplit.js
	./strsplit.js < $< > $@

clean:
	rm -f java.csv perl.csv python.csv js-strsplit.csv StringSplitTest.class
