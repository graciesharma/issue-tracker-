"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { Controller, useForm } from "react-hook-form"
import "easymde/dist/easymde.min.css";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register('title'))


  return (
    <form className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data),
        router.push('/issues')
      }
      )}>
      <TextField.Root placeholder="title" {...register('title')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) =>
          <SimpleMDE placeholder="description" {...field} />

        }
      />
      <Button >Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
