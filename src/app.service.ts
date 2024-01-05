import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let a;
    a = 5;
    a = 6;
    const b = 1;
    const c = 3;
    console.log(a, b, c);
    return 'Hello World!';
  }
}
