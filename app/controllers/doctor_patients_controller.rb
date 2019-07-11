class DoctorPatientsController < ApplicationController
  def index
    @doctor = Doctor.find(params[:doctor_id])
    patients = Patient.where(doctor_id: @doctor.id)
    render json: {doctor: @doctor, patients: patients}
  end

  def show
    @doctor = Doctor.find(params[:doctor_id])
    patient = Patient.find(params[:id])
    render json: {doctor: @doctor, patient: patient}
  end

  def create
    doctor = Doctor.find(params[:doctor_id])
    patient = Patient.new(patient_params)
    if patient.save
    render json: {patient: patient}
    end
  end

  def destroy
    Patient.destroy(params[:id])
    render json: {message: "Patient Deleted", status: 200}
  end

  def patient_params
    params.permit(:first_name, :last_name, :diagnosis, :born_on, :doctor_id)
  end

end
