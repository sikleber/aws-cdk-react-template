#!/usr/src/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { ReactAppStack } from './react-app-stack'

const app = new cdk.App()

new ReactAppStack(app, 'InfrastructureStack', {})
