package com.betty.springbootecommerce.dto;

import com.betty.springbootecommerce.entity.Address;
import com.betty.springbootecommerce.entity.Customer;
import com.betty.springbootecommerce.entity.Order;
import com.betty.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
