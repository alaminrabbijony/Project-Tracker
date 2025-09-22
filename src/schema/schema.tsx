import * as z from "zod";

const name = z.string().min(1, "Name required").max(50, "Too long");
const msg = z.string().min(1, "Name required").max(125, "Too long").optional();
const img = z.string().url().optional();
const audio = z.string().optional()

export const taskSchema = z.object({
  taskName: name,
});
export const processSchema = z.object({
  processName: name,
});
export const logSchema = z
  .object({
    msg,
    img: img,
    audio: audio,
  })
  .refine((data) => data.msg || data.img || data.audio, {
    message: "msg must have txt or img or audio is required",
  });

export type taskInput = z.infer<typeof taskSchema>;
export type processInput = z.infer<typeof processSchema>;
export type logInput = z.infer<typeof logSchema>;
