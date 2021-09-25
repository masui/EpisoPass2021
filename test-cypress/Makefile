#
# make cleanしたあと、make install make open しないと
# make run が動かないようだ
#


run:
	npx cypress run -s cypress/integration/episopass.js

# GUIの場合
open:
	npx cypress open

install:
	yarn add --dev cypress
	-mkdir cypress
	-mkdir cypress/integration
	cp episopass.js cypress/integration

clean:
	/bin/rm -r -f node_modules
	/bin/rm -f *~
	/bin/rm -f package.json
	/bin/rm -f cypress.json
	/bin/rm -f yarn.lock
	/bin/rm -r -f cypress
