@extends('layouts.master')

@section('title', 'Thêm nhân viên')

@section('content')
    <h2>Thêm nhân viên</h2>

    <form method="POST" action="{{ route('employees.store') }}">
        @csrf
        <input name="name" placeholder="Tên" value="{{ old('name') }}">
        <input name="email" placeholder="Email" value="{{ old('email') }}">
        <input name="position" placeholder="Vị trí" value="{{ old('position') }}">
        <button type="submit">Save</button>
    </form>
@endsection
