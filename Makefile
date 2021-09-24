.PHONY: test

all: compile dasmaker episodas template index pack embed scp cp

allcp: compile dasmaker episodas template index pack embed scp cp

install:
	npm install
pack:
	webpack
embed:
	ruby bin/embed.rb src/index.html > dist/episopass.html

compile:
	coffee -c src/editor.coffee
	coffee -c src/crypt.coffee

index:
	erb src/index.html.erb > src/index.html

dasmaker:
	erb src/dasmaker.js.erb > src/dasmaker.js

episodas:
	erb src/episodas.js.erb > src/episodas.js

# episodas.erb, sampledata.json から dastemplate.js をつくる
template: src/episodas.html.erb src/sampledata.json
	ruby bin/dastemplate.rb > src/dastemplate.js

clean:
	-/bin/rm -r -f bundle.js
	-/bin/rm src/editor.js
	-/bin/rm src/crypt.js
	-/bin/rm -f *~
	-/bin/rm -f .gitignore~
	-/bin/rm -f */*~
	cd test; make clean

scp:
	scp dist/episopass.html pitecan.com:/www/www.pitecan.com/tmp
	scp dist/episopass.html pitecan.com:/www/www.pitecan.com/tmp/EpisoPass.html

cp:
	cp dist/episopass.html index.html

test:
	cd test; make
