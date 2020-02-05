jest.mock('aws-sdk');
import * as AWS from 'aws-sdk';

export function mockAws() {
  const mockEcr = new AWS.ECR();
  const mockS3 = new AWS.S3();
  return {
    mockEcr,
    mockS3,
    currentAccount: jest.fn(() => Promise.resolve('current_account')),
    defaultRegion: jest.fn(() => Promise.resolve('current_region')),
    ecrClient: jest.fn(() => mockEcr),
    s3Client: jest.fn(() => mockS3),
  };
}

export function errorWithCode(code: string, message: string) {
  const ret = new Error(message);
  (ret as any).code = code;
  return ret;
}

export function mockedApiResult(returnValue: any) {
  return jest.fn().mockReturnValue({
    promise: jest.fn().mockResolvedValue(returnValue)
  });
}

export function mockedApiFailure(code: string, message: string) {
  return jest.fn().mockReturnValue({
    promise: jest.fn().mockRejectedValue(errorWithCode(code, message))
  });
}