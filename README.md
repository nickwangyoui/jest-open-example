# Running Jest Bug

## Description

Unable to properly kill node Child Process in Jest AfterAll()
opentest.js provided to help show expected results

### Installing & Executing

* Clone this Repository
* Run npm install
* To see error: run `yarn test`
* Expected value: run `node opentest.js`

### Reproduce: 
```
$ yarn test
yarn run v1.15.2
$ jest
  console.log sum.spec.js:9
    65109

 PASS  ./sum.spec.js (5.431s)
  Test Launch and Assert
    ✓ adds 1 + 2 to equal 3 (5009ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        5.914s, estimated 6s
Ran all test suites.
  console.log sum.spec.js:16
    65109

  console.log sum.spec.js:22
    false

✨  Done in 6.59s.
```

### Expected:
```
$ node opentest.js
Open
Kill 65180
Killed = true
End
```