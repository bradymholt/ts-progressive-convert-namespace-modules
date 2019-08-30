import { Shark } from "./shark.m";
import { Dog } from "./dog.m";

// Call method on imported module that uses code from namespace
Shark.attack();

// Call namcespaced code directly
new Dog().speak();

// Call namcespaced code directly
old_school.Monkey.speak();
