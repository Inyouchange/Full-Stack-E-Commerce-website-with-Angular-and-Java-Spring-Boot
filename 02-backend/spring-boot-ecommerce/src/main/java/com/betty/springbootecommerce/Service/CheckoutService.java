package com.betty.springbootecommerce.Service;

import com.betty.springbootecommerce.dto.Purchase;
import com.betty.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
