import React from "react";
import Layout from "../../_includes/layouts/base.11ty";
import { Eleventy } from "../../../types";

export const data = {
  permalink: "404.html",
};

export function render(data: Eleventy) {
  return (
    <Layout {...data} lang="en" title="Page not found">
      <section className="content limited-large">
        <h1 className="text-center">Page not found</h1>
        <p className="text-center">
          Sorry, but we could not find the page that you are looking for.
          <a href="/">Go to the homepage</a>.
        </p>
        <div className="text-center margin">
          <img
            src="/img/404.jpg"
            className="medium-width-70 large-width-50 border-radius"
            style={{ margin: "3rem 0" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="random-entry overflow-auto">
            <p>
              In the meantime, this is how you write a Hello World for Java:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `package demo;

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World");
  }
}`,
              }}
            ></pre>
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for Kotlin:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `package demo

fun main(args : Array&lt;String&gt;) {
  println("Hello, world!")
}`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for Scala:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `object HelloWorld extends App {
  println("Hello, World!")
}`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>In the meantime, this is how you write a Hello World for Go:</p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `package main

import "fmt"

func main() {
  fmt.Println("hello world")
}`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for
              Objective-C:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `#import &lt;Foundation/Foundation.h&gt;

int main (int argc, const char * argv[]) {
  NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
  NSLog (@"Hello, World!");
  [pool drain];
  return 0;
}`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for .Net:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `public class HelloWorldHandler : HttpMessageHandler {
  protected override Task&lt;HttpResponseMessage&gt; SendAsync(HttpRequestMessage request, CancellationToken cancellationToken) {
    return Task.FromResult(new HttpResponseMessage() {
      Content = new ByteArrayContent(Encoding.UTF8.GetBytes("Hello World."))
    });
  }
};

public static void Register(HttpConfiguration config) {
  var emptyDictionary = new HttpRouteValueDictionary();
  config.Routes.MapHttpRoute("index", "", emptyDictionary, emptyDictionary, new HelloWorldHandler());
}`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for MATLAB:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `classdef hello
  methods
    function greet(this)
      disp('Hello, World')
    end
  end
end`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for Assembly:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `    global  _main
    extern  _printf

    section .text
_main:
    push    message
    call    _printf
    add     esp, 4
    ret
message:
    db  'Hello, World', 10, 0`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for Bash:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `#!/bin/bash
STR="Hello World!"
echo $STR`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for Delphi:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `procedure TForm1.ShowAMessage;
begin
  ShowMessage('Hello World!');
end;`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for EIFFEL:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `class
    HELLO_WORLD
create
    make
feature
    make
        do
            print ("Hello, world!%N")
        end
end`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for ERLANG:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `-module(hello).
-export([hello_world/0]).

hello_world() -&gt; io:fwrite("hello, world").`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for HASKELL:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `module Main where

main :: IO ()
main = putStrLn "Hello, World!"`,
              }}
            />
          </div>

          <div className="random-entry overflow-auto hide">
            <p>
              In the meantime, this is how you write a Hello World for Rust:
            </p>
            <pre
              dangerouslySetInnerHTML={{
                __html: `fn main() {
  println!("Hello, world!");
}`,
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
