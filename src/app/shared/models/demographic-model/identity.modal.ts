import { AttributeModel } from './attribute.modal';

/**
 * @description This is the data object for the request object for adding the user.
 * @author Shashank Agrawal
 *
 * @export
 * @class IdentityModel
 */
export class IdentityModel {
  constructor(
    public IDSchemaVersion: number,
    public fullName: AttributeModel[],
    public dateOfBirth: string,
    public gender: AttributeModel[],

    public residenceStatus: AttributeModel[],


    public region: AttributeModel[],
    public province: AttributeModel[],
    public city: AttributeModel[],
    public zone: AttributeModel[],
    public postalCode: AttributeModel[],
    public phone: string,
    public email: string,
    public referenceIdentityNumber: string,
  public permanentAddressLine: string,
  ) {}
}
