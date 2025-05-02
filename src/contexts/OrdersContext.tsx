import { createContext, useContext, useState, ReactNode } from 'react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  trackingNumber?: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: {
    type: string;
    last4: string;
  };
}

interface OrdersContextType {
  orders: Order[];
  getOrder: (orderId: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders] = useState<Order[]>([
    {
      id: 'ORD-2024-001',
      date: '2024-03-20',
      status: 'processing',
      total: 179.98,
      items: [
        {
          id: '1',
          name: 'Nike Air Max 270',
          price: 89.99,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          size: '10',
          color: 'Black',
        },
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States',
      },
      paymentMethod: {
        type: 'Credit Card',
        last4: '4242',
      },
    },
    {
      id: 'ORD-2024-002',
      date: '2024-03-15',
      status: 'delivered',
      total: 89.99,
      items: [
        {
          id: '2',
          name: 'Adidas Ultra Boost',
          price: 89.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          size: '9',
          color: 'White',
        },
      ],
      trackingNumber: '1Z999AA1234567890',
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States',
      },
      paymentMethod: {
        type: 'Credit Card',
        last4: '4242',
      },
    },
  ]);

  const getOrder = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  return (
    <OrdersContext.Provider value={{ orders, getOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}; 