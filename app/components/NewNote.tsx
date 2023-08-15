import React from "react";
import { Form } from "@remix-run/react";

export default function NewNote() {
    return (
        <div>
            <h1>This is Demo Page</h1>
            <Form method="post" id="note">
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </p>
                <p>
                    <label htmlFor="content">Content</label>
                    <input type="text" id="content" name="content" required />
                </p>
                <div className="bg-orange-400">
                    <button> Add note</button>
                </div>
            </Form>
        </div>
    )
}