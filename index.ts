import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const configs = new pulumi.Config();

const eip = aws.ec2.Eip.get('public-ip', configs.require('eipId'))

export const user = configs.require('user')
export const publicIp = eip.publicIp