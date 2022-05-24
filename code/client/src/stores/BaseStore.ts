import {action, observable} from "mobx";
import {Service} from "../models/Service";

export class BaseStore {
	@observable
	services: Service[] = [];

	@action set_services(v: Service[]) {
		this.services = v;
	}
}
