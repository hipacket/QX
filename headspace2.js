  
var obj = JSON.parse($response.body);

obj= {
	"links": {
		"self": "/subscription/iap/product-infos"
	},
	"data": [{
		"type": "appleIapProductInfos",
		"id": "IOSIAP12M_AUG19V1",
		"attributes": {
			"voucherCode": "IOSIAP12M_AUG19V1",
			"subscriptionPeriod": "12M",
			"trialPeriod": null,
			"promoText": "MOST POPULAR",
			"isDefault": true,
			"isActive": true,
			"displayMonthlyRate": true
		}
	}, {
		"type": "appleIapProductInfos",
		"id": "IOSIAP1M_AUG19",
		"attributes": {
			"voucherCode": "IOSIAP1M_AUG19",
			"subscriptionPeriod": "1M",
			"trialPeriod": null,
			"promoText": null,
			"isDefault": false,
			"isActive": true
		}
	}]
};
$done({body: JSON.stringify(obj)});
//
