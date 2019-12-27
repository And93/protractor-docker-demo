### General

0. Install LTS **Node.js**. ([More details](https://nodejs.org/))
1. Install require packages: `npm i`

### Local

2. npm test
    - go to `http://localhost:9222/`
2.1. Kill process Ctrl + C and close opened Chrome window.
    
### Docker
2. Execute `docker-compose up`
3. Open new console
4. [In opened console] Execute `docker-compose exec e2e npm run test:docker`
    - go to on the local machine and into 'selenium' container: `http://localhost:9222/`
    
    
// curl -vvv http://localhost:9222    


