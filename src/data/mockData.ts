export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  products: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: string;
  orderDate: string;
  deliveryDate?: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredDate: string;
  orderCount: number;
  totalSpent: number;
  favouritesCount: number;
  status: 'active' | 'suspended';
}

export const mockOrders: Order[] = [
  {
    id: 'ORD-2024-001',
    customerId: 'cust-001',
    customerName: 'John Smith',
    customerEmail: 'john.smith@email.com',
    products: [
      {
        productId: '1',
        productName: 'BioMax Pro Fingerprint Sensor',
        quantity: 2,
        price: 129.99,
      },
    ],
    totalAmount: 259.98,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    paymentStatus: 'paid',
    shippingAddress: '123 Main St, New York, NY 10001',
    orderDate: '2024-11-20',
    deliveryDate: '2024-11-23',
  },
  {
    id: 'ORD-2024-002',
    customerId: 'cust-002',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    products: [
      {
        productId: '2',
        productName: 'SecureLock X1 Smart Door Lock',
        quantity: 1,
        price: 249.99,
      },
      {
        productId: '5',
        productName: 'ProxCard RFID Reader Kit',
        quantity: 1,
        price: 89.99,
      },
    ],
    totalAmount: 339.98,
    status: 'shipped',
    paymentMethod: 'UPI',
    paymentStatus: 'paid',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    orderDate: '2024-11-22',
  },
  {
    id: 'ORD-2024-003',
    customerId: 'cust-003',
    customerName: 'Michael Chen',
    customerEmail: 'mchen@email.com',
    products: [
      {
        productId: '3',
        productName: 'AccessGuard 8000 Controller',
        quantity: 1,
        price: 399.99,
      },
    ],
    totalAmount: 399.99,
    status: 'processing',
    paymentMethod: 'Net Banking',
    paymentStatus: 'paid',
    shippingAddress: '789 Pine Rd, Chicago, IL 60601',
    orderDate: '2024-11-24',
  },
  {
    id: 'ORD-2024-004',
    customerId: 'cust-004',
    customerName: 'Emily Davis',
    customerEmail: 'emily.d@email.com',
    products: [
      {
        productId: '6',
        productName: 'VaultGuard Biometric Safe',
        quantity: 1,
        price: 349.99,
      },
    ],
    totalAmount: 349.99,
    status: 'pending',
    paymentMethod: 'COD',
    paymentStatus: 'pending',
    shippingAddress: '321 Elm St, Houston, TX 77001',
    orderDate: '2024-11-25',
  },
  {
    id: 'ORD-2024-005',
    customerId: 'cust-005',
    customerName: 'David Wilson',
    customerEmail: 'dwilson@email.com',
    products: [
      {
        productId: '4',
        productName: 'IrisVision 4K Face Recognition Camera',
        quantity: 2,
        price: 599.99,
      },
    ],
    totalAmount: 1199.98,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    paymentStatus: 'paid',
    shippingAddress: '555 Maple Dr, Phoenix, AZ 85001',
    orderDate: '2024-11-18',
    deliveryDate: '2024-11-21',
  },
];

export const mockUsers: AdminUser[] = [
  {
    id: 'cust-001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    registeredDate: '2024-09-15',
    orderCount: 5,
    totalSpent: 1299.95,
    favouritesCount: 8,
    status: 'active',
  },
  {
    id: 'cust-002',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 234-5678',
    registeredDate: '2024-10-02',
    orderCount: 3,
    totalSpent: 789.97,
    favouritesCount: 5,
    status: 'active',
  },
  {
    id: 'cust-003',
    name: 'Michael Chen',
    email: 'mchen@email.com',
    phone: '+1 (555) 345-6789',
    registeredDate: '2024-08-20',
    orderCount: 7,
    totalSpent: 2599.93,
    favouritesCount: 12,
    status: 'active',
  },
  {
    id: 'cust-004',
    name: 'Emily Davis',
    email: 'emily.d@email.com',
    phone: '+1 (555) 456-7890',
    registeredDate: '2024-11-10',
    orderCount: 1,
    totalSpent: 349.99,
    favouritesCount: 3,
    status: 'active',
  },
  {
    id: 'cust-005',
    name: 'David Wilson',
    email: 'dwilson@email.com',
    phone: '+1 (555) 567-8901',
    registeredDate: '2024-07-05',
    orderCount: 9,
    totalSpent: 3499.91,
    favouritesCount: 15,
    status: 'active',
  },
  {
    id: 'cust-006',
    name: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    phone: '+1 (555) 678-9012',
    registeredDate: '2024-10-25',
    orderCount: 2,
    totalSpent: 429.98,
    favouritesCount: 4,
    status: 'active',
  },
];

export interface DashboardStats {
  totalProducts: number;
  activeListings: number;
  totalOrders: number;
  revenue: number;
  totalUsers: number;
  revenueChange: number;
  ordersChange: number;
  usersChange: number;
}

export const mockDashboardStats: DashboardStats = {
  totalProducts: 12,
  activeListings: 11,
  totalOrders: 127,
  revenue: 45678.99,
  totalUsers: 342,
  revenueChange: 12.5,
  ordersChange: 8.3,
  usersChange: 15.7,
};

export const mockSalesData = [
  { month: 'Jun', sales: 12500 },
  { month: 'Jul', sales: 18000 },
  { month: 'Aug', sales: 22000 },
  { month: 'Sep', sales: 19500 },
  { month: 'Oct', sales: 26000 },
  { month: 'Nov', sales: 32000 },
];

export const mockCategoryData = [
  { name: 'Smart Locks', value: 35 },
  { name: 'Fingerprint Sensors', value: 28 },
  { name: 'Access Control', value: 22 },
  { name: 'Biometric Devices', value: 15 },
];

