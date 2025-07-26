import { EPermission } from "@/entities/models/user.interface";

export const fromDbPermission = (dbPerm: number): EPermission => {
    if (dbPerm === 0) return EPermission.STUDENT;
    if (dbPerm === 1) return EPermission.TEACHER;
    throw new Error(`Invalid permission code: ${dbPerm}`);
  };