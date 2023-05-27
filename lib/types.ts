import { Treasure } from "@prisma/client";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { type } from "os";

export type Treasures = Treasure[];

