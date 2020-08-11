# Code samples
## Getting investment details
### CURL
```shell
curl --request POST \
  --url https://api.staging.bumpertobumper.ca/cci_graphql \
  --header 'content-type: application/json' \
  --data '{"query":"query {\n  investment (id: \n    \"$ID\") {\n    PaidTo\n    MemberID\n    ShopID\n    InvestmentTypeID\n    CreateDate\n    Amount\n    Comment\n    PaymentType\n    PaymentDate\n    PaymentNumber\n    InvestmentType {\n      ID\n      Type\n      AvailableTo\n      id\n    } \n  }\n}"}'
```

### JavaScript
```js
fetch("https://api.staging.bumpertobumper.ca/cci_graphql", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": "{\"query\":\"query {\\n  investment (id: \\n    \\\"$ID\\\") {\\n    PaidTo\\n    MemberID\\n    ShopID\\n    InvestmentTypeID\\n    CreateDate\\n    Amount\\n    Comment\\n    PaymentType\\n    PaymentDate\\n    PaymentNumber\\n    InvestmentType {\\n      ID\\n      Type\\n      AvailableTo\\n      id\\n    } \\n  }\\n}\"}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

### Pyhton
```python
import http.client

conn = http.client.HTTPSConnection("api.staging.bumpertobumper.ca")

payload = "{\"query\":\"query {\\n  investment (id: \\n    \\\"$ID\\\") {\\n    PaidTo\\n    MemberID\\n    ShopID\\n    InvestmentTypeID\\n    CreateDate\\n    Amount\\n    Comment\\n    PaymentType\\n    PaymentDate\\n    PaymentNumber\\n    InvestmentType {\\n      ID\\n      Type\\n      AvailableTo\\n      id\\n    } \\n  }\\n}\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/cci_graphql", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
