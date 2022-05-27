import {action, makeObservable, observable} from "mobx";
import {Service} from "../models/Service";
import {UserRole} from "../models/types";

export class BaseStore {
	constructor() {
		makeObservable(this);
	}

	@observable
	services: Service[] = new Array<Service>();

	@action set_services(v: Service[]) {
		this.services = v;
	}
}
