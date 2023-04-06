"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const test_origin_1 = require("./test-origin");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'integ-distribution-origin-shield');
new cloudfront.Distribution(stack, 'Dist', {
    defaultBehavior: {
        origin: new test_origin_1.TestOrigin('www.example.com', {
            originShieldEnabled: false,
        }),
    },
});
new integ_tests_alpha_1.IntegTest(app, 'DistributionOriginShield', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuZGlzdHJpYnV0aW9uLW9yaWdpbi1zaGllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5kaXN0cmlidXRpb24tb3JpZ2luLXNoaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyxrRUFBdUQ7QUFDdkQsK0NBQTJDO0FBQzNDLHlEQUF5RDtBQUV6RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7QUFFckUsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDekMsZUFBZSxFQUFFO1FBQ2YsTUFBTSxFQUFFLElBQUksd0JBQVUsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxtQkFBbUIsRUFBRSxLQUFLO1NBQzNCLENBQUM7S0FDSDtDQUNGLENBQUMsQ0FBQztBQUVILElBQUksNkJBQVMsQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUU7SUFDN0MsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQ25CLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBJbnRlZ1Rlc3QgfSBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgeyBUZXN0T3JpZ2luIH0gZnJvbSAnLi90ZXN0LW9yaWdpbic7XG5pbXBvcnQgKiBhcyBjbG91ZGZyb250IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZGZyb250JztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbmNvbnN0IHN0YWNrID0gbmV3IGNkay5TdGFjayhhcHAsICdpbnRlZy1kaXN0cmlidXRpb24tb3JpZ2luLXNoaWVsZCcpO1xuXG5uZXcgY2xvdWRmcm9udC5EaXN0cmlidXRpb24oc3RhY2ssICdEaXN0Jywge1xuICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICBvcmlnaW46IG5ldyBUZXN0T3JpZ2luKCd3d3cuZXhhbXBsZS5jb20nLCB7XG4gICAgICBvcmlnaW5TaGllbGRFbmFibGVkOiBmYWxzZSxcbiAgICB9KSxcbiAgfSxcbn0pO1xuXG5uZXcgSW50ZWdUZXN0KGFwcCwgJ0Rpc3RyaWJ1dGlvbk9yaWdpblNoaWVsZCcsIHtcbiAgdGVzdENhc2VzOiBbc3RhY2tdLFxufSk7XG5cbmFwcC5zeW50aCgpOyJdfQ==