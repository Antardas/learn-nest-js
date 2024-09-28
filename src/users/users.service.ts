import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, email: 'johndoe@example.com', name: 'John Doe', role: 'ADMIN' },
    {
      id: 2,
      email: 'janesmith@example.com',
      name: 'Jane Smith',
      role: 'INTERN',
    },
    {
      id: 3,
      email: 'michaeldavis@example.com',
      name: 'Michael Davis',
      role: 'ENGINEER',
    },
    {
      id: 4,
      email: 'emilybrown@example.com',
      name: 'Emily Brown',
      role: 'ADMIN',
    },
    { id: 5, email: 'davidlee@example.com', name: 'David Lee', role: 'INTERN' },
    {
      id: 6,
      email: 'stephengreen@example.com',
      name: 'Stephen Green',
      role: 'ENGINEER',
    },
    {
      id: 7,
      email: 'christinewhite@example.com',
      name: 'Christine White',
      role: 'ADMIN',
    },
    {
      id: 8,
      email: 'robertblack@example.com',
      name: 'Robert Black',
      role: 'INTERN',
    },
    {
      id: 9,
      email: 'patriciahill@example.com',
      name: 'Patricia Hill',
      role: 'ENGINEER',
    },
    {
      id: 10,
      email: 'jameswilson@example.com',
      name: 'James Wilson',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: {
    id: number;
    email: string;
    name: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    this.users.push(user);
    return user;
  }

  update(
    id: number,
    updatedUser: {
      email?: string;
      name?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    return null;
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
