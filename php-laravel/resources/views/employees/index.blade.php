@extends('layouts.master')

@section('title', 'Trang nhân viên')

@section('content')
    <h2>Danh sách nhân viên</h2>

    @if(session('success'))
        <x-alert :message="session('success')" />
    @endif

    @forelse($employees as $emp)
        <p>{{ $emp->name }} - {{ $emp->email }} - {{ $emp->department->name ?? 'Chưa có phòng ban' }}</p>
    @empty
        <p>Không có dữ liệu</p>
    @endforelse

    {{ $employees->links() }}
@endsection
