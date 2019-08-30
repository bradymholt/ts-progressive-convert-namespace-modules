// We'll module shim the Dog class by exporting it as-is to reuse existing namespace code.
// Eventually we would move the Dog logic in here.
export import Dog = old_school.Dog;
