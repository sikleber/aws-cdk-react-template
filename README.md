# aws-cdk-react-template

This project is a template for creating a React application hosted on AWS and deployed using the AWS Cloud Development Kit (CDK).
It consists of two TypeScript projects using NPM:

## Frontend Project
See the [frontend package.json](frontend/package.json) for relevant scripts.

## Infrastructure Project
See the [infrastructure package.json](infrastructure/package.json) for relevant scripts.

Deploy the infrastructure using the following commands:
```bash
npm run deploy -- --profile <profile> --region <region>
```

The [cdk.json](infrastructure/cdk.json) file tells the CDK Toolkit how to execute your app.



