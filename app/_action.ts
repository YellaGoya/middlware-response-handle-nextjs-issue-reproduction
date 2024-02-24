"use server";

export async function foo(data: FormData) {
  console.log(data.entries());
  return { foo: "bar" };
}