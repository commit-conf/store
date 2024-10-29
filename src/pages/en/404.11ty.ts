export const data = {
  layout: 'base',
  title: 'Page not found',
  lang: 'en',
  permalink: '404.html'
};

export function render() {
  return `<section class="content limited-large">
  <h1 class="text-center">Page not found</h1>
  <p class="text-center">
    Sorry, but we could not find the page that you are looking for.
    <a href="/">Go to the homepage</a>.
  </p>
  <div class="text-center margin">
    <img src="/img/404.jpg" class="medium-width-70 large-width-50 border-radius" style=" margin: 3rem 0">
  </div>
  
  <div style="  
    display: flex; flex-direction: column;
    justify-content: center;">
  <div class="random-entry overflow-auto">
    <p>
      In the meantime, this is how you write a Hello World for Java:
    </p>
    <pre>package demo;

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World");
  }
}</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Kotlin:
    </p>
    <pre>package demo

fun main(args : Array&lt;String&gt;) {
  println("Hello, world!")
}</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Scala:
    </p>
    <pre>object HelloWorld extends App {
  println("Hello, World!")
}</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Go:
    </p>
    <pre>package main

import "fmt"

func main() {
  fmt.Println("hello world")
}</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Objective-C:
    </p>
    <pre>#import &lt;Foundation/Foundation.h&gt;

int main (int argc, const char * argv[]) {
  NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
  NSLog (@"Hello, World!");
  [pool drain];
  return 0;
}</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for .Net:
    </p>
    <pre>public class HelloWorldHandler : HttpMessageHandler {
  protected override Task&lt;HttpResponseMessage&gt; SendAsync(HttpRequestMessage request, CancellationToken cancellationToken) {
    return Task.FromResult(new HttpResponseMessage() {
      Content = new ByteArrayContent(Encoding.UTF8.GetBytes("Hello World."))
    });
  }
};

public static void Register(HttpConfiguration config) {
  var emptyDictionary = new HttpRouteValueDictionary();
  config.Routes.MapHttpRoute("index", "", emptyDictionary, emptyDictionary, new HelloWorldHandler());
}</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for MATLAB:
    </p>
    <pre>classdef hello
  methods
    function greet(this)
      disp('Hello, World')
    end
  end
end</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Assembly:
    </p>
    <pre>    global  _main
    extern  _printf

    section .text
_main:
    push    message
    call    _printf
    add     esp, 4
    ret
message:
    db  'Hello, World', 10, 0</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Bash:
    </p>
    <pre>#!/bin/bash
STR="Hello World!"
echo $STR</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Delphi:
    </p>
    <pre>procedure TForm1.ShowAMessage;
begin
  ShowMessage('Hello World!');
end;</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for EIFFEL:
    </p>
    <pre>class
    HELLO_WORLD
create
    make
feature
    make
        do
            print ("Hello, world!%N")
        end
end</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for ERLANG:
    </p>
    <pre>-module(hello).
-export([hello_world/0]).

hello_world() -&gt; io:fwrite("hello, world").</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for HASKELL:
    </p>
    <pre>module Main where

main :: IO ()
main = putStrLn "Hello, World!"</pre>
  </div>
  
  <div class="random-entry overflow-auto hide">
    <p>
      In the meantime, this is how you write a Hello World for Rust:
    </p>
    <pre>fn main() {
  println!("Hello, world!");
}</pre>
  </div>


  </div>
  
</section>`
}