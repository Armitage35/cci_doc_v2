# Code samples

## Getting investment details

### GraphQL

```graphql
query {
	investment(id: $ID) {
		PaidTo
		MemberID
		ShopID
		InvestmentTypeID
		CreateDate
		Amount
		Comment
		PaymentType
		PaymentDate
		PaymentNumber
		InvestmentType {
			ID
			Type
			AvailableTo
			id
		}
	}
}
```

### CURL

```shell
curl --request POST \
  --url https://api.staging.bumpertobumper.ca/cci_graphql \
  --header 'content-type: application/json' \
  --data '{"query":"query {\n  investment (id: \n    \"$ID\") {\n    PaidTo\n    MemberID\n    ShopID\n    InvestmentTypeID\n    CreateDate\n    Amount\n    Comment\n    PaymentType\n    PaymentDate\n    PaymentNumber\n    InvestmentType {\n      ID\n      Type\n      AvailableTo\n      id\n    } \n  }\n}"}'
```

### JavaScript

```js
fetch('https://api.staging.bumpertobumper.ca/cci_graphql', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
	},
	body:
		'{"query":"query {\\n  investment (id: \\n    \\"$ID\\") {\\n    PaidTo\\n    MemberID\\n    ShopID\\n    InvestmentTypeID\\n    CreateDate\\n    Amount\\n    Comment\\n    PaymentType\\n    PaymentDate\\n    PaymentNumber\\n    InvestmentType {\\n      ID\\n      Type\\n      AvailableTo\\n      id\\n    } \\n  }\\n}"}',
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
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

## Get Parts details

### GraphQL

```graphql
query {
	part(id: $ID) {
		PRTId
		SUPKey
		PRTLineCode
		PRTSubLine
		PRTSubLineDescEn
		PRTSubLineDescFr
		PRTBrand
		PRTArticle
		PRTDescEn
		PRTDescFr
		PRTCode
		PRTChartDescEn
		PRTChartDescFr
		PRTLabourHours
		PRTQa
		PRTActive
		Supplier {
			id
			IsActive
		}
	}
}
```

### CURL

```shell
curl --request POST \
  --url https://api.staging.bumpertobumper.ca/cci_graphql \
  --header 'content-type: application/json' \
  --data '{"query":"query {\n  part (id: \"$ID\") {\n    PRTId\n    SUPKey\n    PRTLineCode\n    PRTSubLine\n    PRTSubLineDescEn\n    PRTSubLineDescFr\n    PRTBrand\n    PRTArticle\n    PRTDescEn\n    PRTDescFr\n    PRTCode\n    PRTChartDescEn\n    PRTChartDescFr\n    PRTLabourHours\n    PRTQa\n    PRTActive\n    Supplier {\n      id\n      IsActive\n    }\n  }\n}"}'
```

### JavaScript

```js
fetch('https://api.staging.bumpertobumper.ca/cci_graphql', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
	},
	body:
		'{"query":"query {\\n  part (id: \\"$ID\\") {\\n    PRTId\\n    SUPKey\\n    PRTLineCode\\n    PRTSubLine\\n    PRTSubLineDescEn\\n    PRTSubLineDescFr\\n    PRTBrand\\n    PRTArticle\\n    PRTDescEn\\n    PRTDescFr\\n    PRTCode\\n    PRTChartDescEn\\n    PRTChartDescFr\\n    PRTLabourHours\\n    PRTQa\\n    PRTActive\\n    Supplier {\\n      id\\n      IsActive\\n    }\\n  }\\n}"}',
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.error(err);
	});
```

### Pyhton

```python
import http.client

conn = http.client.HTTPSConnection("api.staging.bumpertobumper.ca")

payload = "{\"query\":\"query {\\n  part (id: \\\"$ID\\\") {\\n    PRTId\\n    SUPKey\\n    PRTLineCode\\n    PRTSubLine\\n    PRTSubLineDescEn\\n    PRTSubLineDescFr\\n    PRTBrand\\n    PRTArticle\\n    PRTDescEn\\n    PRTDescFr\\n    PRTCode\\n    PRTChartDescEn\\n    PRTChartDescFr\\n    PRTLabourHours\\n    PRTQa\\n    PRTActive\\n    Supplier {\\n      id\\n      IsActive\\n    }\\n  }\\n}\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/cci_graphql", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

## Get Technician details

### GraphQL

```graphql
{
	shopTechnician(id: "$ID") {
		TCHKey
		SHPKey
		TCHTitle
		TCHFname
		TCHEmail
		TCHTechrole
		TCHServrole
		TCHOwnerrole
		TCHOtherrole
		TCHOtherroletxt
	}
}
```

### CURL

```shell
curl --request POST \
  --url https://api.staging.bumpertobumper.ca/cci_graphql \
  --header 'content-type: application/json' \
  --data '{"query":"{\n  shopTechnician(id: \"$ID\") {\n    TCHKey\n    SHPKey\n    TCHTitle\n    TCHFname\n    TCHEmail\n    TCHTechrole\n    TCHServrole\n    TCHOwnerrole\n    TCHOtherrole\n    TCHOtherroletxt\n  }\n}\n"}'
```

### Javascript

```javascript
fetch('https://api.staging.bumpertobumper.ca/cci_graphql', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
	},
	body:
		'{"query":"{\\n  shopTechnician(id: \\"$ID\\") {\\n    TCHKey\\n    SHPKey\\n    TCHTitle\\n    TCHFname\\n    TCHEmail\\n    TCHTechrole\\n    TCHServrole\\n    TCHOwnerrole\\n    TCHOtherrole\\n    TCHOtherroletxt\\n  }\\n}\\n"}',
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.error(err);
	});
```

### Python

```python
import http.client

conn = http.client.HTTPSConnection("api.staging.bumpertobumper.ca")

payload = "{\"query\":\"{\\n  shopTechnician(id: \\\"$ID\\\") {\\n    TCHKey\\n    SHPKey\\n    TCHTitle\\n    TCHFname\\n    TCHEmail\\n    TCHTechrole\\n    TCHServrole\\n    TCHOwnerrole\\n    TCHOtherrole\\n    TCHOtherroletxt\\n  }\\n}\\n\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/cci_graphql", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
