// 定义一个接口,用于限制person对象的具体属性
export interface Personinter {
  name: string;
  age: number;
  id: string;
}

// 一个自定义类型
// export type Persons = Array<Personinter>;  两种写法
export type Persons = Personinter[];
