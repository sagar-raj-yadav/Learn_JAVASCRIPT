# 1.
GitHub Actions ek automation tool hai jo aapke GitHub repository me Continuous Integration (CI) aur Continuous Deployment (CD) enable karta hai. Matlab, jab bhi aap code push, pull request ya koi aur event karte ho, to ye automatically kuch kaam (jobs) execute kar sakta hai.

# 2. GitHub Actions Kyun Use Karte Hain?
✔ Automation: Code push hote hi automatic kaam ho jaye.
✔ Testing: Code me koi error ya bug to nahi, ye automatically check ho jaye.
✔ Deployment: Jab bhi koi release ho, project auto-deploy ho jaye.
✔ Multi-Platform Support: AWS, Firebase, Docker, Heroku, Vercel sabke saath kaam karta hai.
✔ Time Saving: Har baar manually build/test karne ki zaroorat nahi.


Example:
Agar aapka ek React Native ya Node.js project hai, aur aap chahte ho ki:
✅ Jab bhi code push ho to tests run ho jayein.
✅ Jab bhi koi release create karein to project deploy ho jaye (AWS, Vercel, Firebase, etc.)


# 3.CI/CD ->  
 continuosly integration                                  continuosly deployment
code push->unit test ->Security scan ->                      build->deploy

=>kuch bhi automate karna hai to hume ek workflow create karna hoga.

# 4.workflow->
Workflow ek YAML file hoti hai jo define karti hai ki kaunsa job kya kaam krega,like one job to run all the test cases,second job is to build react project.(workflow contain multiple jobs)
-> " .github folder -> workflows folder " iss folder ke andar workflow create karte h.
->one repository can have multiple workflows.
->Note: Kuch bhi automate karna hai to workflow create karna hoga.

# 5. Events ->ye tab trigger hoga jab workflow ko run karna ho.
push → Jab code push ho.
pull_request → Jab koi pull request create kare.
schedule → Daily ya weekly koi task run karna ho.
release → Jab koi GitHub release banaye.

# 6.Runners
Runner ek virtual machine (VM) ya server hota hai jo GitHub Actions ki jobs ko execute karta hai.

Types of runners ->
i.GitHub-Hosted Runners (Default wale)
ii.Self-Hosted Runners (Apne khud ke servers pe)

# push my code into virtual machine?
mera code mera repo me hai,lekin usko ubunto virtual machine me bhejna hoga ,because workflow to wahi run hoga na.

# Method 1:- (hard way)
name: Deploy Dist
on: [push,workflow_dispatch]     # these are called event    
jobs:
    test:       
        runs-on: ubuntu-latest  
        steps:
            - name : "get code"
              run : |
               echo "cloning repo"
               echo "${{toJson(github)}}"
               git clone https://github.com/${{github.repository}}.git



# Method 2:- use github marketplace

47:25 ->youtube coders


Note: git commit -m "add comment [skip ci]" ->isse workflow automatically trigger nhi hoga.
hume manually trigger karna hoga.( because we use [skip ci] )

Note: difference between "npm install" and "npm ci"


