<ul>
    @foreach ($results as $record)
    <li>{{ $record->field }}</li>
    @endforeach
</ul>
