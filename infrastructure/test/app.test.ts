import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { ReactAppStack } from '../src/react-app-stack'

test('Deployment Bucket Created', () => {
    const app = new cdk.App();
    const stack = new ReactAppStack(app, 'TestReactAppStack');
    Template.fromStack(stack).hasResourceProperties('AWS::S3::Bucket', {
        BucketName: 'react-app-deployment-bucket'
    });
});
