const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function main(){
    console.log(`starting`);
    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Tittle?",
            name: "projectTittle"
        },
        {
            type: "input",
            message: "Provide description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Add table of contents ",
            name: "tableOfContent"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "How many contributors are in your project",
            name: "contributorsNo"
        },
        {
            type: "input",
            message: "provide the names of the contributors",
            name: "contributorsNames"
        },
        {
            type: "input",
            message: "provide the github url of the contributors",
            name: "contributorsGitUrl"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        ]);
        console.log(`starting`);
        console.log(userResponse);
        const gitUsername = userResponse.username;
        const projectTittle = userResponse.projectTittle;
        const projectDescription = userResponse.projectDescription;
        const tableOfContent = userResponse.tableOfContent;
        const installationProcess = userResponse.installationProcess;
        const instruction = userResponse.instruction;
        const instructionExample = userResponse.instructionExample;
        const licenseName = userResponse.licenseName;
        const licenseUrl = userResponse.licenseUrl;
        const contributorsNo = userResponse.contributorsNo;
        const contributorsNames = userResponse.contributorsNames;
        const contributorsGitUrl = userResponse.contributorsGitUrl;
        const tests = userResponse.tests;

        // const myData = userResponse;
        var ans = (`
# ${gitUsername} 
## ${projectTittle} 
### ${projectDescription}
# ${tableOfContent}
# ${installationProcess}
# ${instruction}
# ${instructionExample}
# ${licenseName}
#${licenseUrl}
#${contributorsNo}
        `)
        // const gitUsernameStuff = await axios.get(`https://gist.github.com/${gitUsername}`);
        // const gitData = gitUsernameStuff.data;
        // console.log(gitData)

        // var writeDirector = fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
        //     if(err) throw err;
        //     console.log('folder created...');
        // });
        var writeResult = fs.writeFileSync(path.join(__dirname, '../GoodReadMeGenerator', 'readmegen.md'), ans )
        console.log("something completed. ")
    }
    main();