import json, boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('mihir-sawant-cv')
def lambda_handler(event, context):
    response = table.get_item(Key={
            'id':'1'
    })
    record_count = response['Item']['counter']
    record_count = str(int(record_count) + 1)
    print(record_count)
    response = table.put_item(Item={
            'id':'1',
            'counter': record_count
    })
    
    return {'count': record_count}