import { SetMetadata } from "@nestjs/common";
import {PartnerJob, UserRoles} from "../enums/roles";

export const ROLES_KEY = "roles";
export const Roles = (...roles: UserRoles[]) => SetMetadata(ROLES_KEY, roles);

export const JOB_KEY = "jobs";
export const Jobs = (...jobs: PartnerJob[]) => SetMetadata(JOB_KEY, jobs);
